# 修改已push的commit的作者信息
`git filter-branch -f --env-filter "GIT_AUTHOR_NAME='NewName'; GIT_AUTHOR_EMAIL='NewEmail'; GIT_COMMITTER_NAME='NewName'; GIT_COMMITTER_EMAIL='NewEmail';" HEAD`
# 获取部分commit的内容并合并到自己分支
**cherry-pick**
```
git cherry-pick [<options>] <commit-ish>...

常用options:
    --quit                退出当前的chery-pick序列
    --continue            继续当前的chery-pick序列
    --abort               取消当前的chery-pick序列，恢复当前分支
    -n, --no-commit       不自动提交
    -e, --edit            编辑提交信息
```
`git cherry-pick 2555c6e` 
# push了错误的commit之后回滚
`git reset --hard 2555c6e` 意思是回退了2555c6e这commit
--hard参数是会清除文件改动的，所以一定要谨慎操作，使用`--soft`则会保留文件改动，并把改动存入暂存区  
具体参考 -> https://www.jianshu.com/p/c2ec5f06cf1a
# 合并多个无用的commit
**rebase**  
`git rebase -i HEAD~4` 合并最近的四个分支
