#!/bin/bash
# Deploy to Maurice's Vercel account
# Hides .git to prevent Vercel CLI from detecting GitHub remote
# (which causes silent deploy failures on hobby plan)

set -e

echo "Building..."
npm run build

if [ -z "$VERCEL_TOKEN" ]; then
  echo "Error: VERCEL_TOKEN env var not set"
  exit 1
fi

echo "Deploying to Vercel..."
mv .git .git-backup
npx vercel deploy --prod --token "$VERCEL_TOKEN" --yes
mv .git-backup .git

echo "Done."
