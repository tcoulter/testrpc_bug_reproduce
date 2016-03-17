#TestRPC error reproduction repository

This repository contains two tests, to be run by Truffle. They
are very slightly different, and they both pass most of the time.
However, one of them fails 10%-20% of the time. To demonstrate
this, run

    while truffle test; do :; done

This will repeatedly run the truffle tests, and you'll eventually
see one of them fail. Note that if you're not using my branch
of `truffle` at https://github.com/area/truffle.git#exit-code ,
then even upon a failure it'll keep running, so keep an eye out.
If you're using my branch, then when there is a failure the 
`truffle test` commands will stop.

I do not see these tests failing at all if I use the python-based
`testrpc`.
