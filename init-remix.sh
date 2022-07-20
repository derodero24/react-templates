#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-remix.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`
TEMPLATE_DIR=$RELATIVE_DIR/remix

cp -r \
  $TEMPLATE_DIR/app \
  $TEMPLATE_DIR/public \
  $TEMPLATE_DIR/.eslintrc \
  $TEMPLATE_DIR/.gitignore \
  $TEMPLATE_DIR/remix.config.js \
  $TEMPLATE_DIR/server.js \
  $TEMPLATE_DIR/package.json \
  $TEMPLATE_DIR/tsconfig.json \
  $TEMPLATE_DIR/README.md \
  $TEMPLATE_DIR/netlify.toml \
  $TEMPLATE_DIR/remix.env.d.ts \
  $TEMPLATE_DIR/pnpm-lock.yaml \
  $1
