console.log('aaaaaaaaa');
console.log('bbbbbbbbbbb');
console.log('this is my own code');
阿士大夫
a1
b233
c3333
番茄你个tomato
console.log('1026-先add然后拉取会不会显示冲突呢?');
console.log('1026-add之后但是还没commit的时候，拉取代码，会自动abort：');
// error: Your local changes to the following files would be overwritten by merge:
//     a.js
// Please commit your changes or stash them before you merge.
// Aborting
console.log('use the merge --continue instead of commit');
// the conflict has resolved, then add ., then merge --continue
// in this case ,there are two commit nodes
console.log('then test there is no conflict');
fffad
// llllllllllll-commit one
// lllllllll-two,no add commit ,is stash
// lllll-three
555555555-one
5555555-two
//-------------10.28-----------------
console.log('pull代码自动合并的时候，没有冲突的情况下，远程代码自动合并到本地文件，合并之后远程改动的那些文件是否需要add？')
// 不需要，pull = fetch + merge，本地代码与远程代码均改动有新的提交记录，本地代码的修改已add， commit
// 此时pull, 本地的修改与远程修改执行合并，生成一个merge commit，
// git status : nothing to commit, working tree clean.use "git push" to publish your local commits
//只需要执行 git pull就行了
// 修改a.js which is on the feature branch on remote
