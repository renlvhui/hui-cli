
import { Command } from 'commander'
import { version } from '../package.json'
import { create } from './command/create'
// 这里我们用 yuhui 当作我的指令名称
// 命令行中使用 yuhui xxx 即可触发
const program = new Command('yuhui');
program.version(version, '-v --version')

program
    .command('update')
    .description('更新 yuhui 至最新版本')
    .action(async () => {
        console.log('update command')
    });

program
    .command('create')
    .description('创建一个新项目')
    .argument('[name]', '项目名称')
    .action(async (dirName) => {
        create(dirName);
    });

program.parse()