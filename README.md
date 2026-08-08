# Personal Portfolio — Django

A personal profile website built with Django, plain HTML/CSS/JS (no frontend
framework, no build step). Designed to look hand-made rather than templated:
an editor-tab navbar, a git-log-style timeline, and hand-drawn highlighter
marks on key phrases instead of stock "AI portfolio" visuals.

## Project structure

```
portfolio/
├── manage.py
├── requirements.txt
├── db.sqlite3            (created after your first migrate — not needed for this site,
│                           but Django expects it to exist)
├── mysite/                Django project config
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── main/                  Django app — one view per page
│   ├── views.py
│   ├── urls.py
│   └── apps.py
├── templates/
│   ├── base.html          shared nav + footer
│   ├── index.html         Home
│   ├── about.html         About Me, My Journey, Skills, Currently Learning, Beyond Coding
│   ├── projects.html      Projects, Internship, Achievements
│   └── contact.html       Contact
└── static/
    ├── css/style.css
    ├── js/script.js
    └── images/            (empty — add your own photo/graphics here)
```

**Note on the structure you sketched:** you asked for Django as the backend but
listed `app.py` in the tree, which is a Flask convention, not Django's. Django
projects are organised around `manage.py` + a project package (here, `mysite/`)
+ one or more "apps" (here, `main/`) — so I used that instead, since it's what
`Django` actually expects. Everything else (templates/, static/) matches what
you asked for.

## Running it locally

```bash
# 1. Create and activate a virtual environment (recommended)
python -m venv venv
source venv/bin/activate        # on Windows: venv\Scripts\activate

# 2. Install Django
pip install -r requirements.txt

# 3. Run the development server
python manage.py runserver

# 4. Open the site
# http://127.0.0.1:8000/
```

No database migrations are required to view the site — nothing here reads or
writes to the database yet.

## Filling in your content

Search the templates for `[ADD ... HERE]` — every one of those is a spot
where real information about you needs to go. Nothing fake has been filled
in for you (no invented projects, achievements, or stats). Priority order:

1. `templates/base.html` — your name, GitHub, LinkedIn, email
2. `templates/index.html` — your intro, city, current focus
3. `templates/about.html` — your story, timeline milestones, currently learning, beyond coding
4. `templates/projects.html` — your actual projects and internship detail
5. `templates/contact.html` — your contact links

## Customizing the design

All design tokens (colors, fonts, spacing) live at the top of
`static/css/style.css` under `:root`. Change a value there and it updates
everywhere it's used.

## Deploying

For a simple free option, look at Render, Railway, or PythonAnywhere — all
support Django out of the box. Before deploying anywhere public:

- Set `DEBUG = False` in `mysite/settings.py`
- Generate a new `SECRET_KEY` (see the comment above it in `settings.py`)
- Add your real domain to `ALLOWED_HOSTS`
"# portfolio" 
