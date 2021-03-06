# !/bin/sh

build() {
    echo 'building.....'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false
    export CI=false

    react-scripts build

    mkdir -p dist
    cp -r build/* dist
}

build