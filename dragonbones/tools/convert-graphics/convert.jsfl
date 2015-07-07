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

		// For all Layers
		for(var layer in timeline.layers)
		{
			// For all Frames
			for(var i=0 ; i<timeline.layers[layer].frames.length ; i++)
			{
				// For each elements
				for(var e=0 ; e<timeline.layers[layer].frames[i].elements.length ; e++)
				{
					var seekedElement = timeline.layers[layer].frames[i].elements[e];
					if(seekedElement.symbolType == "graphic") {
						seekedElement.symbolType = "movie clip";
					}
					//fl.getDocumentDOM().setElementProperty('symbolType', 'movie clip');

					if(seekedElement.libraryItem && (seekedElement.symbolType == "movie clip" || seekedElement.symbolType == "graphic")) {
                        ParseTimeline(seekedElement.libraryItem.timeline);
					}

					//seekedElement.name = timeline.layers[layer].name;
				}
			}
		}
}

ParseTimeline(fl.getDocumentDOM().getTimeline());
