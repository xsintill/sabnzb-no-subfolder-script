import * as fileSystem from "fs-extra";
module FSystem {
    "use strict";
    fileSystem.move('c:/testfolder/subfolder/test.txt', 'c:/testfolder/test.txt')

    console.log('done moving file');
}


