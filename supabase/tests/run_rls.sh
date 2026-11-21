#!/bin/sh
# Test the row rules on a throwaway Postgres (run inside WSL or Linux with Postgres installed):
#   sh supabase/tests/run_rls.sh
# Makes a scratch cluster in /tmp on port 5544, runs the stub, the real schema twice as a plain owner role (it must be safe to re-run) and the
# tests, then removes the cluster. It never touches any other database.
set -e
HERE=$(cd "$(dirname "$0")" && pwd)
BIN=$(ls -d /usr/lib/postgresql/*/bin | sort -V | tail -1)
DIR=$(mktemp -d /tmp/prepare-me-rls.XXXXXX)
PORT=5544
trap '"$BIN/pg_ctl" -D "$DIR/data" -m immediate stop >/dev/null 2>&1 || true; rm -rf "$DIR"' EXIT
"$BIN/initdb" -D "$DIR/data" -A trust -U tester >/dev/null
"$BIN/pg_ctl" -D "$DIR/data" -o "-p $PORT -k $DIR -c listen_addresses=''" -l "$DIR/log" -w start >/dev/null
PSQL="psql -h $DIR -p $PORT -U tester -d postgres -v ON_ERROR_STOP=1 -q -At"
$PSQL -f "$HERE/stub_supabase.sql"
$PSQL -c "set role schema_owner" -f "$HERE/../schema.sql"
$PSQL -c "set role schema_owner" -f "$HERE/../schema.sql"
$PSQL -f "$HERE/rls_test.sql" 2>&1 | sed 's/^psql:[^:]*:[0-9]*: NOTICE:  //'
