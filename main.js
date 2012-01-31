
	  var panels = new Array('panel1', 'panel2', 'panel3');
	  var selectedTab = null;
	  function showPanel(tab, name)    {
		if (selectedTab) {
		  selectedTab.style.backgroundColor = '';
		  selectedTab.setAttribute("class", "nonselectedTab");
		}
		selectedTab = tab;
		selectedTab.style.backgroundColor = 'ffffff';
		selectedTab.setAttribute("class", "selectedTab");

		for(i = 0; i < panels.length; i++)
		  document.getElementById(panels[i]).style.display = (name == panels[i]) ? 'block':'none';
		
		return false;
	  }
			  