## JIT css path
./resources/css/styles.css

# tailwind css v2.2 via tailwindcss CLI

## tailwind cli command help
0. npx tailwindcss -h

## generate style.css using tailwind CLI
1. install npm (ensure npm installed into system)

## this uses the normal huge styles file
2. npx tailwindcss -o ./resources/css/styles.css

## using JIT
3. npx tailwindcss -o ./resources/css/styles.css --jit --purge './**/*.html'

Note: './**/*.html' is purge location, ./ [current directory] ** [all files here] /*.html [all files ending with .html]

### with watch flag
4. npx tailwindcss -o ./resources/css/styles.css --jit --purge './**/*.html' -w
OR
4.1. npx tailwindcss -o ./resources/css/styles.css --jit --purge './**/*.html' --watch

### add custom style 
5. include tailwind css directives (shows in tailwind.css file) 
6. npx tailwindcss -i tailwind.css -o ./resources/css/styles.css --jit --purge './**/*.html' --watch

### custom config via config file
7. npx tailwindcss init (load config file)
8. npx tailwindcss -i tailwind.css -o ./resources/css/styles.css --jit --purge './**/*.html' --watch (run same command)

### minify css
9. npx tailwindcss -i tailwind.css -o ./resources/css/styles.css --jit --minify--purge './**/*.html'



## NET NINJA

## 
npx tailwindcss -o ./build/styles.css


## 
npx tailwindcss -i ./src/styles.css -o ./build/styles.css

## purge with watch
npx tailwindcss -i ./src/styles.css -o ./build/styles.css --jit --purge="./*.html"
npx tailwindcss -i ./src/styles.css -o ./build/styles.css --jit --purge="./*.html" --watch

## using CLI but with tailwind config file (config file has JIT enabled and purge enabled)
npx tailwindcss -i ./src/styles.css -o ./resources/css/styles.css  --watch