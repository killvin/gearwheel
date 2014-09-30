/////////////////////////////////////////////////////////////
//
// Name: aptree.js
//
//
// Function: Provide a dynamic tree in a web browser.
//
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Global Variables
/////////////////////////////////////////////////////////////

var tree_root = null;        // node to the root of the tree
var maxNodes = 0;            // total count of the nodes
var browser = 0;             // browser type
var nodeIndex = null;        // index of all the nodes in the tree
var totalWidth = 0;          // total width of the tree
var abort = null;            // Abort Url if browser doesn't support dhtml
var selected = null;         // The currently selected item
var imagePath = "/btcjerpWeb/images/tree/";    // Path to images, postpended with '/'
var expandDepth = -1;        // Depth to which we should initially expand;
                             // expand the entire tree by default
var showselect = 0;          // = 1 if we are to change icon on select
var selectedicon = "select.gif"

/////////////////////////////////////////////////////////////
// Define a tree node
//
// Inputs:
//   icon - name of the icon eg. /file/btn.gif
//   content - node or foler content (can be HTML text)
//   link - link for the name and icon
//   parent - parent node
//   id - id assigned to the node
/////////////////////////////////////////////////////////////
function TreeNode(icon, content, link, parent, id, level, is_selectable)
{
  // Class Variables
  this.browser = 0;             // Browser Type
  this.icon = icon;             // Content Icon
  this.link = link;             // Content Link
  this.level = level;           // Nodes Level wrt root node
  this.content = content;       // Content to be displayed
  this.parent = parent;         // Parent TreeNode
  this.children = new Array;    // Children of the current TreeNode
  this.childCount = 0;          // Number of children of this TreeNode
  this.id = id;                 // TreeNode Id number
  this.layer = null;            // Layer refering to the content displayed
  this.width = 0;               // Width of the layer
  this.height = 0;              // Height of the layer
  this.expanded = false;        // Are the children visible
  this.visible = false;         // Is the node itself visiable
  this.PSrc = null;             // Plus icon source url
  this.MSrc = null;             // Minus icon source url
  this.button = null;           // Browser image object to the PM button
  this.img = null;              // Browser image object to the icon
  this.selectable = is_selectable // Item is Selectable?

  // Class Methods
  this.displayTree = displayTree;
  this.layout = JSTree_Layout;

}
/////////////////////////////////////////////////////////////
// initalize()
//   Display the inital state of the tree.
//
// Inputs:
//   None.
// Output:
//   Tree is displayed in the browser.
// Notes:
//   The tree has already been built by the setTreeRoot and
//   addTreeNode methods.
/////////////////////////////////////////////////////////////
function initalize()
{
  var node = tree_root;

  // quickly return to prevent error messages begin displayed.
  if(node == null)
    return;

  // setup the node index for faster access to tree members
  nodeIndex = new Array();
  createNodeIndex(node);

  // set the document node to the tree root
  document.node = tree_root;

  // In Netscape create a layer that is big enough for all
  // nodes to be displayed.  This is to force the scrollbars
  // to appear since Netscape is not as dynamic as IE when it
  // comes to scrollbars

  if(node.browser == 1) {
    var k;
    // Find the maximum width of the tree...
    for(k = 0; k < nodeIndex.length; k++)
    {
      var ndWidth = (nodeIndex[k].content.length * 7) + (22 * nodeIndex[k].level);
      if(ndWidth > totalWidth)
         totalWidth = ndWidth;
    }

    // The total height is the number node multiplied by the
    // number of icons plus some rubber chicken number.
    var totalHeight = (nodeIndex.length * 22) + 20;


    document.write("<layer ID=Sizer visibility=show width="+totalWidth+" height="+totalHeight+" Z-INDEX=0></LAYER>");
   iFontSize = 11;
  }
  else
     iFontSize = 10;

  // Style for all anchors in this block

  document.write("<style>a {color:black; font-family: arial,helvetica; font-size:" +
      iFontSize + "px;}" );
  document.write(".greyed {color:gray; font-family: arial,helvetica; font-size:" +
      iFontSize + "px;} </style>" );

  // display the tree
  displayTree(node, "", false, true, 1);

  // Expose the root unless depth was set to 0

  if( expandDepth != null && expandDepth != 0 ) {
     node.visible = true;
     if(browser == 1)
       node.layer.visibility="show";
     else
       document.all["Item0"].style.display="block";

     node.expanded = true;

     // Show's Roots Children
     expandChildren(node, expandDepth);
  }

   // layout all the created layer in Netscape
  if(node.browser == 1)
    node.layout();

  expandDepth = null;
}

/////////////////////////////////////////////////////////////
// createNodeIndex()
//   Create an index of all the nodes in the tree to speedup
//   lookup work.
//
// Inputs:
//   The root of the tree.
// Output:
//   The nodeIndex is created.
/////////////////////////////////////////////////////////////
function createNodeIndex(node)
{
  nodeIndex[node.id] = node;

  var i;
  for(i = 0; i < node.childCount; i++)
  {
    createNodeIndex(node.children[i]);
  }
}

/////////////////////////////////////////////////////////////
// displayTree()
//   display the tree built in memory
//
// Inputs:
//   node - the node to show
//   spacer - html text spacer
//   lastNode - boolean flag inidcating last child
//   root - is this node the root node.
// Outputs:
//   The tree is displayed to the browser's window
/////////////////////////////////////////////////////////////
function displayTree(node, spacer, lastnode, root, level)
{
// Build the item layer

   if(node.browser == 1)
      document.write("<layer id=Item"+node.id+" visibility=hide width="+totalWidth+" z-index=1>");
   else
      document.write("<div id=Item"+node.id+"  style={display:none} nowrap>");

// Add the spacer to the item

   if(!root)
      document.write(spacer);

// Set the node's layer

   if(node.browser == 1)
      node.layer = document.layers['Item'+node.id];
   else
      node.layer = document.all["Item"+node.id];

// Determine what or if plus-minus buttons are needed.

   if(node.childCount >0) {
      if(!root) {
      // add the appropate  buttons
         if(lastnode) {
             node.PSrc = imagePath + "lplus20.gif";
           node.MSrc = imagePath + "lminus20.gif";
           if( expandDepth == null || expandDepth < 0 || level <= expandDepth )
              useSrc = node.MSrc;
           else
              useSrc = node.PSrc;

            document.write("<a onclick='expandCompressNode("+this.id+");return false' href='javascript:expandCompressNode("+this.id+");'>");
           document.write("<img src='"+ useSrc +"' name='PM"+node.id+"' width=20"+
             " height=20 align=middle border=0>");
           document.write("</A>");
           spacer += "<img src=" + imagePath + "blank20.gif width=20 align=middle height=20 border=0>";
         }
         else {
            node.PSrc = imagePath + "tplus20.gif";
            node.MSrc = imagePath + "tminus20.gif";
           if( expandDepth == null || expandDepth < 0 || level <= expandDepth )
               useSrc = node.MSrc;
            else
               useSrc = node.PSrc;

            document.write("<a onclick='expandCompressNode("+node.id+");return false' href='javascript:expandCompressNode("+node.id+")'>");
            document.write("<img src='"+ useSrc +"' name='PM"+node.id+"' width=20"+
             " height=20 align=middle border=0>");
            document.write("</A>");
            spacer += "<img src=" + imagePath + "vbar20.gif width=20 align=middle height=20 border=0>";
         }  // end if lastnode

      // Set the node button to the appropate browser image object

         if(node.browser == 1)
        node.button = node.layer.document.images['PM'+node.id];
         else
        node.button = document.all['PM'+node.id];
     }  // if (!root)

   // Write the content of the node out

   if (node.selectable) {
      if (showselect)
         document.write("<a href=\"" + ebs(node.link) + "; Sel(" + node.id + ")\">");
      else
         document.write("<a href=\"" + ebs(node.link) + "\">");
          }
   else
      document.write("<span class=greyed>");

   document.write("<img src="+node.icon+" name='icon" + node.id + "' width=16 align=middle height=16 border=0 >");
   document.write("" + node.content );

   if (node.selectable)
      document.write( "</a>" );
   else
      document.write( "</span>" );

   // Set the node icon to the appropriate browser image object
   if(node.browser == 1)
          node.img = node.layer.document.images['icon'+node.id];
   else
      node.img = document.all['icon'+node.id];

   // Close the item layer

   if(node.browser == 1)
      document.write("</layer>");
   else
      document.write("</div>");

   // Loop around all the children and add them

   for(var i = 0; i < node.childCount; i++) {
      var lstnode = false;
      if(i == (node.childCount -1))
         lstnode = true;
      node.children[i].displayTree(node.children[i], spacer, lstnode, false, level+1);
      }
   } // end if( has children)
   else {

   // Add node without childern, note spacer does not change

   if(lastnode)
      document.write("<img src=" + imagePath + "lbar20.gif width=20"+
         " height=20 align=middle border=0>");
   else
      document.write("<img src=" + imagePath + "tbar20.gif width=20"+
         " height=20 align=middle border=0>");

   // Write the content of the node out

   if (node.selectable) {
      if (showselect)
         document.write("<a href=\"" + ebs(node.link) + "; Sel(" + node.id + ")\">");
      else
         document.write("<a href=\"" + ebs(node.link) + "\">");
   }
   else
      document.write("<span class=greyed>");

   document.write("<img src="+node.icon+" name='icon" + node.id + "' width=16 align=middle height=16 border=0 align=middle align=top>");
   document.write("" + node.content );

   if (node.selectable)
       document.write( "</a>" );
   else
       document.write( "</span>" );

   if(node.browser == 1)
      node.img = node.layer.document.images['icon'+node.id];
   else
      node.img = document.all['icon'+node.id];

   // Close the item layer

   if(node.browser == 1)
      document.write("</layer>");
   else
      document.write("</div>");

   }
}

/////////////////////////////////////////////////////////////
// addItem()
//   Add an item to the tree
// Inputs:
//   parent - parent node
//   icon - name of the icon eg. ./file/btn.gif
//   content - node or foler content (can be HTML text)
//   link - link for the name and icon
// Output:
//   The tree node that has been created.
/////////////////////////////////////////////////////////////
function addItem(parent, icon, content, link)
{
  var selectable = true;
//  if(tree_root == null)
//    alert("ERROR:\n Adding nodes to a null tree.\n"+ "Define the root first with addRoot().");

  if(parent == null)
    // assume that a null parent infers adding to the root node
    parent = tree_root;

  if (addItem.arguments.length > 4 && addItem.arguments[4] == 0)
     selectable = false;


  var tempNode = new TreeNode(icon, content, link, parent, maxNodes++, parent.level + 1, selectable);
  tempNode.browser = browser;

  parent.children[parent.childCount++] = tempNode;

  return tempNode;
}

/////////////////////////////////////////////////////////////
// addRoot()
//   Set the root of the tree to be constructed
// Inputs:
//   parent - parent node
//   icon - name of the icon eg. ./file/btn.gif
//   content - node or foler content (can be HTML text)
//   link - link for the name and icon
// Output:
//   The root tree node that has been created.
/////////////////////////////////////////////////////////////
function addRoot(icon, content, link)
{
  // Determine the browser type
  // Browser Types:
  // 0 - Not supported
  // 1 - Netscape Communicator
  // 2 - IE 4.0
  var browserVer = parseInt(navigator.appVersion);
  var browserNam = navigator.appName;
  var selectable = true;

  if(browserNam == "Netscape" && browserVer >= 4)
    browser = 1;
  else if(browserVer >= 4)
    browser = 2;
  else
  {
    document.location = abort;
    browser = 0;
    tree_root = null;
    return null;
  }

  if (addRoot.arguments.length > 3 && addRoot.arguments[3] == 0)
     selectable = false;

  // create a new node and set that as the root.
  var tempNode = new TreeNode(icon, content, link, null, maxNodes++, 1, selectable);
  tempNode.browser = browser;

  tree_root = tempNode;
  return tempNode;
}

/////////////////////////////////////////////////////////////
// setAbort()
//   Set the url to abort to if browser dosen't support dhtml
//
// Inputs:
//   url - url to abort to if browser does not support Dynamic
//         html.
// Output:
//   golbal abort command is set
/////////////////////////////////////////////////////////////
function setAbort(url)
{
   abort = url;
}

function setImagePath(path)
{
   imagePath = path;
}

function setExpandDepth(iDepth)
{
   if( iDepth != null && iDepth >= 0 )
       expandDepth = iDepth;
}

/////////////////////////////////////////////////////////////
// expandChildren()
//   Expand the chlidren of the node by making the chlidren
//   nodes visable.
//
// Inputs:
//   node - the node to be expanded
//   depth - the absolute depth to which to expand (optional)
//           null:  expand leaves if previously expanded
//           < 0 :  forcefully expand entire tree
//           > 0 :  forcefully expand tree n levels from root
// Output:
//   None.
/////////////////////////////////////////////////////////////
function expandChildren(node,depth)
{
  var i;
  if( depth )
     depth--;

  node.expanded = true;

  for(i = 0; i < node.childCount; i++)
  {
    var cnode = node.children[i];

    // show the layers of this node
    if(cnode.browser == 1)
      document.layers['Item'+cnode.id].visibility="show";
    else
      document.all["Item"+cnode.id].style.display = "block";

    cnode.visible = true;

    // open up any previouly open children

    if( depth == null && cnode.expanded )
       expandChildren(cnode);
   else {
      if(depth != null && depth != 0 )
         expandChildren(cnode,depth);
   }
  }
}

/////////////////////////////////////////////////////////////
// expandCompressNode()
//   Event Handler for the Plus-Minus buttons.  This procedure
//   will either expand a node or compress a node depending on
//   the current state of node.
//
// Inputs:
//   id - the id number of the node of which created the event
// Output:
//   None.
/////////////////////////////////////////////////////////////
function expandCompressNode(id)
{
  var node = nodeIndex[id];

  // determine the current state of the node
  if(!node.expanded)
  {
    // Expand the node
    node.button.src = node.MSrc;
    node.expanded = true;

    // Show all the children
    expandChildren(node);
  }
  else
  {
    //Compress the node
    node.button.src = node.PSrc;
    node.expanded = false;

    // Hide all the Children
    compressChildren(node);
  }

  if(node.browser == 1)
    node.layout();

}

/////////////////////////////////////////////////////////////
// compressChildren()
//   Compress the chlidren of the node by hiding its chlidren
//   nodes.
//
// Inputs:
//   node - the node to be compressed
// Output:
//   None.
/////////////////////////////////////////////////////////////
function compressChildren(node)
{
  var i;
  for(i = 0; i < node.childCount; i++)
  {
    var cnode = node.children[i];

    // Handle the different browser cases
    if(cnode.browser == 1)
      document.layers['Item'+cnode.id].visibility="hide";
    else
      document.all["Item"+cnode.id].style.display = "none";

    // update the node visible flag
    cnode.visible = false;

    // close up the child's children
    if(cnode.childCount > 0)
      compressChildren(cnode);
  }
}

/////////////////////////////////////////////////////////////
// JSTree_Layout()
//   Layout the layers of the tree one after another.
//
// Inputs:
//   None.  Uses document.layers to do the layout.
// Output:
//   A Laid out tree.
// Note:
//   This function is only needed for Netscape.
/////////////////////////////////////////////////////////////
function JSTree_Layout()
{
  var docLayers;

  // extract the layers of the document
  docLayers = document.layers;

  // initalize position and loop variables
  var i = 0;
  var posY = docLayers[i].pageY + docLayers[i].document.height;

  for(i = 1; i < docLayers.length; i++)
  {
    // don't layout a hidden layer
    if(docLayers[i].visibility != "hide")
    {
      // set the location of the layer
      docLayers[i].moveTo(docLayers[i].x, posY);
      posY += docLayers[i].document.height;
    }
  }
}

function Sel(id) {
  var node = nodeIndex[id];

  if (selected != null)
     selected.img.src = selected.icon;

  selected = node;
  selected.img.src = imagePath + selectedicon;

  var node_ptr = selected.parent;
  var need_refresh = false;

  while (node_ptr && node_ptr != tree_root) {
      if (!node_ptr.expanded) {
          node_ptr.button.src = node_ptr.MSrc;
        expandChildren(node_ptr);
         node_ptr = node_ptr.parent;
        need_refresh = true;
     }
     else
         break;
  }

  if (need_refresh && node.browser == 1)
    node.layout();
}

// browsers parse (and unescape) the href in the processing
// of an onclick.  By the time str gets to our callback,
// it is escaped again.  This ensures our callback gets a
// string with escaped backslashes.

function ebs(str) {
  if (!str || str == null)
     return("");

  return (str.replace(/\\/g, "\\\\"));
}
