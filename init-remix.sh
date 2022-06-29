#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-remix.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`

cp -r \
  $RELATIVE_DIR/remix/app \
  $RELATIVE_DIR/remix/public \
  $RELATIVE_DIR/remix/.eslintrc \
  $RELATIVE_DIR/remix/.gitignore \
  $RELATIVE_DIR/remix/remix.config.js \
  $RELATIVE_DIR/remix/server.js \
  $RELATIVE_DIR/remix/package.json \
  $RELATIVE_DIR/remix/tsconfig.json \
  $RELATIVE_DIR/remix/README.md \
  $RELATIVE_DIR/remix/netlify.toml \
  $RELATIVE_DIR/remix/remix.env.d.ts \
  $RELATIVE_DIR/remix/pnpm-lock.yaml \
  $1
