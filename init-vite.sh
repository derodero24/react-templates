#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-vite.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`

cp -r \
  $RELATIVE_DIR/vite/src \
  $RELATIVE_DIR/vite/.eslintrc \
  $RELATIVE_DIR/vite/.gitignore \
  $RELATIVE_DIR/vite/index.html \
  $RELATIVE_DIR/vite/package.json \
  $RELATIVE_DIR/vite/tsconfig.json \
  $RELATIVE_DIR/vite/README.md \
  $RELATIVE_DIR/vite/vite.config.ts \
  $RELATIVE_DIR/vite/pnpm-lock.yaml \
  $1
