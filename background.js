
    var contextsLists =["selection","link","image","page"];

    for(i=0;i<contextsLists.length;i++){
        var context=contextsLists[i];
        var titleX="Twitter Toolkit: Share this "+context+" on your twitter profile";
        chrome.contextMenus.create({
            title:titleX,
            onclick: myFunction,
            id:context,
            contexts:[context]
        });
        
    }


function myFunction(data,tab){
    switch(data.menuItemId)
    {
        case 'selection':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"});
            break;
        case 'link':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type:"panel"});
            break;
        case 'image':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl),type:"panel"});
            break;
        case 'page':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(data.pageUrl),type:"panel"});
            break;

    }
}