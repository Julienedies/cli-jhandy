#!/usr/bin/env node

/**
 * Created by Julien on 2017/4/15.
 */

const program = require('commander');

/*program
 .version('1.0')
 .usage('jtxt [options]')
 .option('-m, --merge <path>', '合并目录里的txt文件')
 .option('-d, --down <url>', '根据url下载html里的链接并存为txt文件')
 .option('-c, --clean <reg>', '根据规则对文本进行清理')
 .parse(process.argv);*/

program
    .version('1.0', '-v, --version')
    .usage('jhandy <sub-command>');

program
    .command('csv2json')
    .description('csv文件转为json文件')
    .option('-s, --source <csv_file>', "csv文件")
    .option('-d, --dist [json_file]', 'json文件')
    .action(function (options) {
        var f = require('./libs/csv2json.js');
        var s = options.source;
        var d = options.dist;
        if (!d) {
            if (s == 's.txt') {
                f(s, '/Users/j/dev/jHandy/stocks.json');
                console.log(`${s} ok!`);
                return;
            }
            if (s == 't.txt') {
                f(s, '/Users/j/dev/chrome-extension-contextMenuUtils/js/data/T.js');
                console.log(`${s} ok!`);
                return;
            }
        }

        f(s, d);
    });


program
    .command('merge')
    .description('合并当前目录序列文本文件到一个文件')
    .option('-p, --place [p]', "目前无选项，占位符")
    .action(function(options){
        var f = require('./libs/merge.js');
        f();
    });


program.parse(process.argv);
