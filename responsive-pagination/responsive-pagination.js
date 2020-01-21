
(function ($){
    jQuery.fn.rPage = function () {
        var $this = $(this);
        for(var i = 0, max = $this.length; i < max; i++)
        {
        	new rPage($($this[i]));
        }

        function rPage($container)
        {
            console.log($container);
        	this.label = function()
        	{
        		var active_index = this.els.filter(".active").index();
                var rp = this;
                /* give classes to li  (page-away- number of index - active index) 
                   left arrow and the right arrow takes right-etc and left-etc
                */
        		this.els.each(function(){
        			if (rp.isNextOrPrevLink($(this)) == false)
        			{
        				$(this).addClass("page-away-" + (Math.abs(active_index - $(this).index())).toString());
        			}
        			else
        			{
        				if ($(this).index() > active_index)
        				{
        					$(this).addClass("right-etc");
        				}
        				else
        				{
        					$(this).addClass("left-etc");
        				}
        			}
        		});
        	}

        	this.makeResponsive = function()
    	    {
    	    	this.reset();
    	    	var width = this.calculateWidth();
                // check if the width of all the li that exists > the width of ul  then we need to remove one li
    	    	while (width > this.els.parent().width() - 10)
    	    	{
    	    		var did_remove = this.removeOne();
    	    		if (did_remove == false)
    	    		{
    	    			break;
    	    		}
    	    		width = this.calculateWidth();
    	    	}
    	    }
            /**
             * check if the li is arrow li 
             */
        	this.isNextOrPrevLink = function(element)
        	{
                return (
                    element.hasClass('pagination-prev')
                    || element.hasClass('pagination-next')
                    || element.text() == "»"
                    || element.text() == "«"
                );
        	}

        	this.isRemovable = function(element)
        	{
        		if (this.isNextOrPrevLink(element))
        		{
        			return false;
        		}
        		var index = this.els.filter(element).index();
        		if (index == 1 || this.isNextOrPrevLink($container.find("li").eq(index + 1)))
        		{
        			return false;
        		}
        		if (element.text() == "...")
        		{
        			return false;
        		}
        		return true;
        	}

    	    this.removeOne = function()
    	    {
    	    	var active_index = this.els.filter(".active").index();
    	    	var farthest_index = $container.find("li").length - 1;
    	    	var next = active_index + 1;
    	    	var prev = active_index - 1;

    	    	for (var i = farthest_index - 1; i > 0; i--)
    	    	{
    	    		var candidates = this.els.filter(".page-away-" + i.toString());
    	    		var candidate = candidates.filter(function(){
    	    			return this.style["display"] != "none";
    	    		});
    	    		if (candidate.length > 0)
    	    		{
    	    			for (var j = 0; j < candidate.length; j++)
    	    			{
    	    				var candid_candidate = candidate.eq(j);
    	    				if (this.isRemovable(candid_candidate))
    		    			{
    			    			candid_candidate.css("display", "none");
    			    			if (this.needsEtcSign(active_index, farthest_index - 1))
    			    			{
    			    				this.els.eq(farthest_index - 2).before("<li class='disabled removable'><span>...</span></li>");
    			    			}
    			    			if (this.needsEtcSign(1, active_index))
    			    			{
    			    				this.els.eq(1).after("<li class='disabled removable'><span>...</span></li>");
    			    			}
    			    			return true;
    		    			}
    	    			}
    	    		}
    	    	}
    	    	return false;
    	    }

    	    this.needsEtcSign = function(el1_index, el2_index)
    	    {
    	    	if (el2_index - el1_index <= 1)
    	    	{
    	    		return false;
    	    	}
    	    	else
    	    	{
    	    		var hasEtcSign = false;
    	    		var hasHiddenElement = false;
    	    		for (var i = el1_index + 1; i < el2_index; i++)
    	    		{
    	    			var el = $container.find("li").eq(i);
    	    			if (el.css("display") == "none")
    	    			{
    	    				hasHiddenElement = true;
    	    			}
    	    			if (el.text() == "...")
    	    			{
    	    				hasEtcSign = true;
    	    			}
    	    		}
    	    		if (hasHiddenElement == true && hasEtcSign == false)
    	    		{
    	    			return true;
    	    		}
    	    	}
    	    	return false;
    	    }
            /**
             * display all the li
             * and looking for li has .removable class and delete it
             */
    	    this.reset = function()
    	    {
    	    	for (var i = 0; i < this.els.length; i++)
    	    	{
    	    		this.els.eq(i).css("display", "inline");
    	    	}
    	    	$container.find("li").filter(".removable").remove();
    	    }
            /**
             * calculate the summation of the width of each li that hasn't display == none 
             */
            this.calculateWidth = function() 
            { 
                var width = 0; 
                for (var i = 0; i < $container.find("li").length; i++) 
                { 
                    if(!($container.find("li").eq(i).css('display') == 'none')) 
                    { 
                        if($container.find("li").eq(i).children("a").eq(0).length > 0){
                            // sum the li width 
                            width += $container.find("li").eq(i).children("a").eq(0).outerWidth();
                        }
                        if($container.find("li").eq(i).children("span").eq(0).length > 0){
                            width += $container.find("li").eq(i).children("span").eq(0).outerWidth();
                        }                   
                    } 
                } 
                return width; 
            }

    	    this.els = $container.find("li");
    	    this.label();
    	    this.makeResponsive();

    	    var resize_timer;

            $(window).resize(
            	$.proxy(function()
            	{
            		clearTimeout(resize_timer);
            		resize_timer = setTimeout($.proxy(function(){this.makeResponsive()}, this), 100);
            	}, this)
            );
        }
    };
}(jQuery));