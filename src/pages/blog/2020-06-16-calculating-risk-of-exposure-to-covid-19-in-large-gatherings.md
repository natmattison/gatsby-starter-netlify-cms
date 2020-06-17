---
templateKey: blog-post
title: Calculating risk of exposure to COVID-19 in large gatherings
date: 2020-06-16T22:41:50.550Z
description: Calculating risk of exposure to COVID-19 in large gatherings
featuredpost: true
featuredimage: /img/gatheringrisk.png
tags:
  - coronavirus
  - risk
  - covid19
  - probability
  - statistics
---
As the world continues to reopen businesses, offices, and public places following stay-at-home orders, uncertainty remains around the level of risk associated with returning to various events and gatherings.

With an unknown level of risk and everyone’s own subjective perspective on a tolerable level of risk, determining which events or gatherings are safe and acceptable is currently impossible.

Fortunately, coronavirus testing data is readily available, and we can use some basic probability skills to quantify the risk of large gatherings of any size. Of course, I will be making some assumptions along the way, which I will carefully describe. Note that as I discuss risk, I am defining risk as the probability of being *exposed* to COVID-19, not the probability of getting infected with COVID-19.

Let’s start with the simplest case – perhaps I am uninterested in a large gathering, but I am considering meeting up with a friend today. To estimate this level of risk, I need to estimate the probability that this friend is currently infected with COVID-19. This seems simple enough. I have data on the number of new cases in our state, and I can make a couple of assumptions along the way to quantify the risk.

I live in Pennsylvania, so I collected my state’s data from this covidtracking.com. I know the daily case counts may be imperfect, so I average the number of new cases over the past 7 days to calculate the reported number of daily new cases in Pennsylvania (*row 1*). This estimate tells me how many *new* cases were reported, but we also know that COVID-19 is infectious for some amount of time. In other words, the new cases reported today will be infectious today and for some period of time after; Similarly, the cases reported today were likely infectious before they were tested as well. The parameter we need to calculate (average length of a COVID-19 infection) is difficult to estimate. For my calculation, I decided to use 7 days as the approximate amount of time that COVID-19 is infectious (*row 2*). This estimate is purely based on a ‘gut estimate’, which roughly means that I made it up, and it feels about right based on the research I have done. Nearly all of the research I have read doesn’t come to a sound conclusion on the exact number of days anyone is infectious, so I will stick with my gut estimate for now and create my calculations in a dynamic way that can be easily updated as new information and data become available. There is one other parameter that is challenging to estimate – the proportion of people who are tested compared to the proportion of people who have COVID-19. I listened to [The Daily Podcast](https://www.nytimes.com/2020/06/15/podcasts/the-daily/coronavirus-pandemic.html?action=click&module=audio-series-bar&region=header&pgtype=Article) this week, and the expert, Donald J. McNeil Jr., stated the latest research indicates approximately one third of infections may be asymptomatic (*row 4*). The last parameter in the calculation is simply Pennsylvania’s population, which I can readily collect from US census data (*row 6*). The table below summarizes all of these parameters and my calculation methods. The result is that right now, approximately 0.03% of the population in Pennsylvania is infected with COVID-19.

| Parameter / Estimate | Description                                          | Calculation/Source                                                                                                                                                                   |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 347                  | 7-day average of new cases in PA as of June 16       | covidtracking.com                                                                                                                                                                    |
| 7                    | Average length of infection in days                  | Gut estimate                                                                                                                                                                         |
| 2,429                | Number of people with infection in PA & tested       | Multiply 2 previous estimates (new cases in PA x length of infection)                                                                                                                |
| 33%                  | Proportion of cases that are untested (asymptomatic) | Estimate from [The Daily Podcast](https://www.nytimes.com/2020/06/15/podcasts/the-daily/coronavirus-pandemic.html?action=click&module=audio-series-bar&region=header&pgtype=Article) |
| 3,625                | Number of people with infection in PA                | Divide number of people with infection in PA & tested / proportion of cases that are untested                                                                                        |
| 12,801,989           | Population of PA                                     | https://www.census.gov/quickfacts/PA                                                                                                                                                 |
| 0.03%                | Percent infected in PA right now                     | Divide number of people with infection by population                                                                                                                                 |



Therefore, I can estimate that meeting up with my 1 friend today has about a 0.03% chance of exposure to COVID-19. Now, what if I want to meet up with 2 friends today? How do I calculate that risk? Well, I can be exposed to COVID-19 if friend A has COVID-19 & friend B does not, if friend B has COVID-19 & friend A does not, or if both friend A and friend B have COVID-19. Actually, it’s easier to calculate this the opposite way – I will not be exposed to COVID-19 if and only if neither of my 2 friends has COVID-19, which I can calculate as Probability Friend A does not have COVID-19 times Probability Friend B does not have COVID-19 (99.97% x 99.97%) = 99.94%, and therefore my risk of exposure is 100% - 99.48% = 0.06%. This can then be further extrapolated to any size group – your risk of exposure is 100% - Probability that nobody in the group has COVID-19. I created this formula in Excel and calculated the risk all the way out to a potential gathering of 2000 people. For comparison purposes, I also ran the numbers for New York and Texas states, to see how much higher the risk is in states that have been hit much more heavily by the virus. The results are summarized in the graph below. If I were to attend a wedding with 200 fellow Pennsylvanians, my risk of exposure would be about 6% (vs NY at 8% and TX at 15%). I get to a 25% risk of exposure with a gathering of 1,016 people in PA (vs. NY at 736 and TX at 351).

If your initial reaction is that the risk seems low, let me remind you that these calculations are assessing risk for any one event at any one time. If I were to attend 10 weddings, each with 200 people, my risk of exposure for any 1 wedding is 6%. My risk of exposure across all 10 weddings is 46% (assuming all weddings and attendees are in PA). Public health officials have the incredibly difficult job of assessing risk on a very different scale than me individually calculating my own risk. We are all personally responsible for our own well-being as well as the well-being of everyone in our community. I strongly encourage everyone to follow the guidance of their local public health officials. You can access the official CDC guidance [here](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html).

All calculations and data are available [in this Google Sheet](https://docs.google.com/spreadsheets/d/1vrbhVdLQSGEL1k2B6g_OXAYK9r8q5OQMxcEA6v-2e6A/edit?usp=sharing). Feel free to use this to calculate risk across various numbers of people at a gathering, and you may even update the parameter estimates and see how the result changes – note that you will have to download or copy the sheet to update the parameters.

![](/img/gatheringrisk.png)

**Notes**

* For simplicity, I am only considering risk as exposure to COVID-19, rather than exposure and contracting COVID-19. Research indicates that there are numerous factors associated with contracting COVID-19 upon exposure, and I will leave those calculations and estimations for more experienced epidemiologists.

* These parameter estimates will surely change over time – you can download the Excel file to update based on the latest reported cases or to adjust the parameter estimates.

* For the time being, these calculations are assuming nobody in a gathering has already had COVID-19 and is immune to the virus, which is almost certainly untrue once we get into the calculations of larger gatherings. Because this parameter is largely unknown, likely small, and difficult to estimate, I have intentionally left it out.