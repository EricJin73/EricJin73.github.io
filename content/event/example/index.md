---
title: | 
  Predicting long-term building energy consumption using multiple feature clustering and machine learning: applications in Shanghai, China

event:  16th International Conference on Applied Energy (ICAE2024)
event_url: https://applied-energy.org/icae2024/

location: TOKI MESSE
address:
#  street: 450 Serra Mall
  city: Niigata
  region: Japan
#  postcode: '94305'
  country: Japan

#summary: An example talk using Hugo Blox Builder's Markdown slides feature.
abstract: |
  As  urbanization progresses,  global  building  energy consumption is on the rise, emphasizing the need for a dependable energy consumption prediction model. This study presents a multi-stage machine learning approach comprising a clustering decomposition model (GMM), a prediction model (XGBoost), and an optimization model (PSO). Prior to clustering, the RF model evaluates the significance of various features influencing building energy consumption.  GMM  partitions  the  data  into  distinct clusters,  while  the  PSO  model  fine-tunesthe  initial parameters of XGBoost. Validation is conducted using a dataset comprising 458,836 hourly records spanning three years from 20 office buildings in Shanghai, China.The average hourly energy consumption for all buildings is 79.2 kWh, but there is significant variation, with a standard deviation of 126.3 kWh.The prediction results indicate that  the  proposed  model  consistently  achieves  an  R² exceeding 0.85 across diverse test sets, demonstrating robust  accuracy  and  generalization  capabilities.  These findings offer valuable insights for future building design and energy management strategies.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2024-09-01T13:00:00Z'
date_end: '2024-09-05T15:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2024-10-20T00:00:00Z'

authors:
  - admin
  - Ayyoob Sharifi

tags: []

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)'
  focal_point: Right

#links:
#  - icon: twitter
#    icon_pack: fab
#    name: Follow
#    url: https://twitter.com/georgecushen
url_code: ''
url_pdf: 'https://doi.org/10.46855/energy-proceedings-11538'
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
  - example
---
