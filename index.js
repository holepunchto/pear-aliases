'use strict'
const hypercoreid = require('hypercore-id-encoding')

exports.ALIASES = {
  pear: hypercoreid.decode(
    'pqbzjhqyonxprx8hghxexnmctw75mr91ewqw5dxe1zmntfyaddqy'
  ),
  keet: hypercoreid.decode(
    'oeeoz3w6fjjt7bym3ndpa6hhicm8f8naxyk11z4iypeoupn6jzpo'
  ),
  runtime: hypercoreid.decode(
    'rbw6fbxorqgjgyitworh3f73utc5cu7sczhptn64oonbznuojiao'
  ),
  doctor: hypercoreid.decode(
    'ouenymy889n4ri9g74jm5bcr46wc6hqnxadqhfmbc4xbskerehby'
  ),
  electron: hypercoreid.decode(
    'cktxzetiwt6un3ado5kgqedge6ya4nfazjckzq76zcapefwxakdy'
  )
}

exports.EOLS = {
  keet: [
    hypercoreid.decode('jc38t9nr7fasay4nqfxwfaawywfd3y14krnsitj67ymoubiezqdy')
  ]
}
