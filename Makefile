publish:
	cp -R . /tmp/publishing &&\
	cd /tmp/publishing &&\
	rm -rf /tmp/publishing/slideAssets/* &&\
	echo "slideAssets/\n" >> .gitignore &&\
	rm -rf .git &&\
	git init &&\
	git add . &&\
	git commit -m "Publish for the world" &&\
	git remote add origin git@github.com:Xedon/svelte-for-react-developers-public.git &&\
	git branch -M main &&\
	git push -fu origin main &&\
	rm -rf /tmp/publishing

	