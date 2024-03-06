# this script is use to generate index file. 

touch index.ts
# Loop through all files with the .svg extension in the folder
echo "" > "index.ts"
for svg_file in ./src/test/*.tsx; do
    echo "processing $svg_file" 
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    echo "import $FILE_NAME from './$FILE_NAME'" >> "./src/test/index.ts"
done

echo "export {" >> ./src/test/index.ts

for svg_file in ./src/test/*.tsx; do
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    echo "$FILE_NAME," >> "./src/test/index.ts"
done

echo "}" >> "./src/test/index.ts"
