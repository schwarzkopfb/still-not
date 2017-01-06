PATH="$PATH:./node_modules/.bin"

rm -rf ./coverage
node test/basic.js
node test/irrelevant.js
istanbul cover ./test/custom-handler-before-require.js --report none --print none --include-pid
istanbul cover ./test/custom-handler-after-require.js --report none --print none --include-pid
istanbul report lcov
