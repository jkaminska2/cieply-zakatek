# 1. Build
npm install
npm run build

# 2. Usuń lokalny branch, jeśli istnieje
git branch -D gh-pages -ErrorAction SilentlyContinue

# 3. Usuń branch z GitHuba
git push origin --delete gh-pages 2>$null

# 4. Utwórz czysty branch
git checkout --orphan gh-pages

# 5. Czyszczenie plików
git rm -rf .

# 6. Kopiuj zawartość dist
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 7. Commit + push
git add .
git commit -m "deploy"
git push origin gh-pages --force

# 8. Powrót na main
git checkout main

Write-Host "Deploy zakończony! Strona powinna działać za 10–30 sekund."