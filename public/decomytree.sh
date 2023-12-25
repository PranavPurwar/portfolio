#!/bin/bash

read -p "Enter email: " email
read -s -p "Enter password: " password

echo $email


# API endpoint for user login
api_endpoint="https://deco-my-tree-web.com/api/v1/user/login"

# Construct the JSON data for the request
json_data="{\"email\": \"$email\", \"password\": \"$password\"}"

# Make a curl request to log in
resp=$(curl -X POST -H "Content-Type: application/json" -d "$json_data" "$api_endpoint")

echo $resp

hashed_id=$(echo "$resp" | awk -F'"hashed_id": *"' '{print $2}'  | awk -F'"' '{print $1}')

# Extract access_token using grep and the regex pattern
access_token=$(echo "$resp" | awk -F'"access_token": *"' '{print $2}' | awk -F'"' '{print $1}')


echo "Hashed ID: $hashed_id"
echo "Access Token: $access_token"


second_endpoint="https://deco-my-tree-web.com/api/v1/message/$hashed_id?by_app=false"
second_result=$(curl -X GET -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" "$second_endpoint")

clear

echo $second_result
