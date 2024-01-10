# this script is use to generate index file. 
# put the script inside the folder

touch index.ts
# Loop through all files with the .svg extension in the folder
echo "" > "index.ts"
for svg_file in *.tsx; do
    echo "processing $svg_file" 
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    echo "import $FILE_NAME from './$FILE_NAME'" >> "index.ts"
done
echo "export {" >> index.ts

for svg_file in *.tsx; do
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    echo "$FILE_NAME," >> "index.ts"
done
echo "}" >> "index.ts"
