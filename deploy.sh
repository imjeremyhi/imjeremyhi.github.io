main() {
    local commitMsg="$1"

    rm -rf build
    yarn build
    git checkout master
    rsync -a build/* .
    git add . && git commit -m "$commitMsg" && git push
    git checkout development
}

main "${1:?}"