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
// ----------- 23/11/23-----
// git rm --cache xxx : 会将远程仓库中的对应文件给删掉吗？
// a.js现在的状态是被跟踪还是未被跟踪呀？
// 仍是被跟踪了，原因是git pull 的时候发生了冲突，修改冲突之后，我执行了git add .，仍将a.js放到了暂存区
// 导致刚刚的git rm --cache未生效
// 现在来添加一个.gitignore文件，来取消对该文件的git版本管理
// 在.gitignore文件中配置了该文件
// 现在对它再次修改
// 运行git status ，仍能被跟踪到
// ---------23/11/23-------
// 此时IDE中存在a.js, 但是远程仓库中不存在
// -----------------commit----
// 此时远程仓库存在a.js，.gitignore文件未配置
// 接下来，执行git rm --cache a.js，不配置.gitignore，看git commit提交时是否会忽略a.js