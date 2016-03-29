#!/bin/bash
while [ $? == "0" ]
do
killall node
../ethereumjs-testrpc/bin/testrpc -d &
../truffle/cli.js test
done
