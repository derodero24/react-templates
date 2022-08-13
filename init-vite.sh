#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-vite.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`
TEMPLATE_DIR=$RELATIVE_DIR/vite

cp -r \
  $TEMPLATE_DIR/src \
  $TEMPLATE_DIR/.eslintrc \
  $TEMPLATE_DIR/.gitignore \
  $TEMPLATE_DIR/.prettierrc \
  $TEMPLATE_DIR/index.html \
  $TEMPLATE_DIR/package.json \
  $TEMPLATE_DIR/tsconfig.json \
  $TEMPLATE_DIR/README.md \
  $TEMPLATE_DIR/vite.config.ts \
  $TEMPLATE_DIR/pnpm-lock.yaml \
  $1
