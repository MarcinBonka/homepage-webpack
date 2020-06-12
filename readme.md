![A picture for readme](/src/assets/img/howtocreatereadme.png)
# My 1st readme file created using markdown syntax

## 1. What is this site about?
The place You are visiting is a kind of a playground for training focusing on Front End learning.
You can find here few strange things, not well tailored colors as well as content saying nothing. Well, as I mentioned this is a training place so don't be surprised.

## 2. How do I train my skills?
> "**Learning** is not attained by chance, it must be sought for with ardor and attended to with diligence"
> 	 Abigail Adams

Throughout of whole course I try to preserve followinch approach.
1. Watch each episode of whole lesson (make a notes)
2. Check homework and transfer each exercise to [Trello](https://trello.com/)
3. Do homework watching carefully again each part of the lesson associated with currently executed homework subject.

## 3. My strenghts and weaknesses
In general due to my past experience I feel good in each area of the training where JavaScript is involved. I's quite *easy* to understand JavaScript whereas several aspects ae totally new for me and I like them much. Especially accesing and altering a web page (content/styles/behaviour).
Code Example:
```javascript
const  btnHamburger = document.querySelector('.btnHamburger--js');
btnHamburger.addEventListener('click',() => {
const  naviMenu = document.querySelector('.navi--js');
naviMenu.classList.toggle('navi--open--js');
const  indexMain = document.querySelector('.index__main--js')
if(naviMenu.classList.contains('navi--open--js'))
{
    if(indexMain.classList.contains('main--shiftsmall--js'))
    {
        indexMain.classList.remove('main--shiftsmall--js');
        indexMain.classList.add('main--shiftlarge--js');
    } 
    else  if(indexMain.classList.contains('main--shiftlarge--js'))
    {
        indexMain.classList.remove('main--shiftlarge--js');
        indexMain.classList.add('main--shiftsmall--js');
    }
});
```
From the other hand one of my weekness (not the only one :)) is styling and using css. I've never did it before so here I spend a lot of the time to grasp as much knowledge as I can.

Now let's see how syntax of c# will be coloured
```c#

public class MyExampleClass
{
	private const double PI = 3.14;
	
	public string ShortString {get; set;}
	
	/* Constructor */
	MyExampleClass(double factorX)
	{
		double value = 0.00d;
		int i = 0;
		for(i=0;i<20;i++)
		{
			value += factorX * PI * i;
		}
		ShortString = $"Calculation result = {value:N3}.";
	}
	
}
```
Well not bad however I would expect better colouring of the c# syntax

