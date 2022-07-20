#!/bin/sh

if [ $# != 1 ]; then
  echo "Please use like \n> sh init-nextjs.sh <app-name>"
  exit 1
fi

mkdir $1

RELATIVE_DIR=`dirname "$0"`
TEMPLATE_DIR=$RELATIVE_DIR/nextjs-daisyui

cp -r \
  $TEMPLATE_DIR/public \
  $TEMPLATE_DIR/src \
  $TEMPLATE_DIR/.eslintrc \
  $TEMPLATE_DIR/.gitignore \
  $TEMPLATE_DIR/next.config.js \
  $TEMPLATE_DIR/postcss.config.js \
  $TEMPLATE_DIR/tailwind.config.js \
  $TEMPLATE_DIR/package.json \
  $TEMPLATE_DIR/tsconfig.json \
  $TEMPLATE_DIR/README.md \
  $TEMPLATE_DIR/next-env.d.ts \
  $TEMPLATE_DIR/pnpm-lock.yaml \
  $1
