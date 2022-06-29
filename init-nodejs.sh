#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-nodejs.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`

cp -r \
  $RELATIVE_DIR/nextjs/public \
  $RELATIVE_DIR/nextjs/src \
  $RELATIVE_DIR/nextjs/.eslintrc \
  $RELATIVE_DIR/nextjs/.gitignore \
  $RELATIVE_DIR/nextjs/next.config.js \
  $RELATIVE_DIR/nextjs/package.json \
  $RELATIVE_DIR/nextjs/tsconfig.json \
  $RELATIVE_DIR/nextjs/README.md \
  $RELATIVE_DIR/nextjs/next-env.d.ts \
  $RELATIVE_DIR/nextjs/pnpm-lock.yaml \
  $1
