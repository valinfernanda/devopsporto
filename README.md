# Day 1
# Init Git repo
git init
echo "node_modules/" > .gitignore

# Init Node.js & Install Dependencies
# Init Node project
npm init -y
# Install Express + Postgres driver + dotenv
npm install express pg dotenv


# Day 2 
# Make Dockerfile (root directory)
# Build image
docker build -t my-node-app .
# Run container lokal 
docker run -p 3000:3000 my-node-app
# Test container :  
# Health check
Invoke-RestMethod http://localhost:3000/health

# POST /tasks
Invoke-RestMethod -Uri http://localhost:3000/tasks -Method POST `
  -Body '{"title":"Deploy container"}' -ContentType "application/json"

# GET /tasks
Invoke-RestMethod http://localhost:3000/tasks

# Volume/bind mount  -- for development, not recommended for production
Kalau mau host & container sync → pakai bind mount (-v ${PWD}:/app)
docker run -p 3000:3000 -v ${PWD}:/app my-node-app
| Bagian           | Maksud                                                                     |
| ---------------- | -------------------------------------------------------------------------- |
| `-p 3000:3000`   | Map port container 3000 ke host 3000                                       |
| `-v ${PWD}:/app` | Bind mount: folder project di host (`${PWD}`) → folder `/app` di container |
| `my-node-app`    | Image yang dipakai                                                         |
➡️ All files in your host project folder are directly "mounted" to the /app folder in the container.
➡️ If you edit a file on the host, it will be immediately visible in the container.
➡️ If the container writes a file in /app, it will also appear on the host.



