#!/bin/bash
#
# fetch coverage sorting on build number

db.coverage.find().sort({
    build: -1
});
