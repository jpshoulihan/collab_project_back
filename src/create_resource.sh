#!/bin/bash
echo "Enter resource name: "
read str

echo "Enter the directory path: "
read directory

files=("$directory/$str.controller.ts" "$directory/$str.interface.ts" "$directory/$str.model.ts" "$directory/$str.service.ts" "$directory/$str.validation.ts")

for file in "${files[@]}"; do
  touch "$file"
  echo "Created $file"
done

echo "Resources created successfully!"

