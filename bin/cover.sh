PATH="$PATH:./node_modules/.bin"

rm -rf ./coverage
node test/basic.js &>/dev/null
node test/irrelevant.js &>/dev/null
istanbul cover ./test/custom-handler-before-require.js --report none --print none --include-pid &>/dev/null
istanbul cover ./test/custom-handler-after-require.js --report none --print none --include-pid &>/dev/null
istanbul report lcov
