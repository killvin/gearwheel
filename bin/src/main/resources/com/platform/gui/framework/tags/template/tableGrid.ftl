<#include "common.ftl">
<div class="tableNaviLeading-top">
	<#include "pagination.ftl">
</div>
<table class="tableBasic">
  <tr>
  	<th></th>
  	<#list context.cells as cell>  	
    	<th>
			<#if sortOrder == "asc">
				<#assign cellUrl="${url}sortBy=${cell.name}&sortOrder=desc&page=${pagination.currentPage}">
				<#if sortBy == cell.name>
					<#assign cellClass="sortCurrentAscend"/>
				<#else>
					<#assign cellClass=""/>
				</#if>
			<#else>
				<#assign cellUrl="${url}sortBy=${cell.name}&sortOrder=asc&page=${pagination.currentPage}">
				<#if sortBy == cell.name>
					<#assign cellClass="sortCurrentDescend"/>
				<#else>
					<#assign cellClass=""/>
				</#if>    				
			</#if>
    		<a href="${cellUrl}" class="${cellClass}">${cell.value}</a></th>
    </#list>
    
    <#if rowAction?? && rowAction.options??>
    	<th>Actions</th>
    </#if>
    
  </tr>
  
 	<#list context.rows as row>
 	  <#if row_index%2 == 0>
	  	<tr class="bgcolorType1">
	  <#else>
	  	<tr class="bgcolorType2">
	  </#if>
	  	<td></td>
	    <#list context.cells as cell>
	        <#assign cellUrl='${cell.url!""}'>
	        <#assign cellValue="${row.getValue(cell.name , cell.format)}">
    		<#if cellUrl != "">
    			<td><a href="" onClick="tableGridCellAction(${cellValue});">${cellValue}</a></td>
    		<#else>
		    	<td>${cellValue}</td>
		    </#if>
	    </#list>

		<#if rowAction?? && rowAction.options??>    
	    <td>
	    	<select name="" onChange="tableGridRowAction(this)">
				<#list rowAction.options as option>
					<option value="${option.name}">${option.label}</option>
				</#list>
			</select>
	    </td>
	    </#if>
	  </tr>
  </#list>
</table>

<script>
	function tableGridRowAction(_select){
		alert("You Click the row Action and choice " + _select.options[_select.selectedIndex].value);
	}
	
	function tableGridCellAction(_cellValue){
		alert("You Click one of the column and its value is " + _cellValue);
	}

</script>
<div class="tableNaviLeading-bottom">
	<#include "pagination.ftl">
</div>

<#include "preferences.ftl">