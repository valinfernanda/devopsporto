
# Init Git repo
git init
echo "node_modules/" > .gitignore

# Init Node.js & Install Dependencies
# Init Node project
npm init -y
# Install Express + Postgres driver + dotenv
npm install express pg dotenv
