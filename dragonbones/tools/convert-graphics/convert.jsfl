var counter = 0;
var timelineList = [];
function ParseTimeline(timeline)
{
		{
			// Only parse new timelines.
            var insideTimelineList = false;
            for(var i=0; i<timelineList.length; i++) {
                if(timelineList[i] == timeline) {
                    insideTimelineList = true;
                }
            }
            if(insideTimelineList) {
                return;
            }
            else {
                timelineList.push(timeline);
            }
            counter++;
		}

		for(var layer in timeline.layers)
		{
			for(var i=0 ; i<timeline.layers[layer].frames.length ; i++)
			{
				for(var e=0 ; e<timeline.layers[layer].frames[i].elements.length ; e++)
				{
					var element = timeline.layers[layer].frames[i].elements[e];
					if(element.symbolType == "graphic") {
						element.symbolType = "movie clip";
					}
					if(element.libraryItem && (element.symbolType == "movie clip" || element.symbolType == "graphic")) {
                        ParseTimeline(element.libraryItem.timeline);
					}
				}
			}
		}
}

ParseTimeline(fl.getDocumentDOM().getTimeline());
