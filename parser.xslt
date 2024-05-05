<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html lang="en">
      <head>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"></link>
          <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
          <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>          
          <script src="client.js"></script>
          <link rel="stylesheet" href="style.css"></link>       
      </head>
        <body>
          <h2>
            Issues and incidents: <xsl:value-of select="count(issues/issue)" />
          </h2>
          <div id="containers">
            <xsl:for-each select="issues/issue">
              <div class="single-item">
                <div class="header">
                  <xsl:value-of select="title" />
                </div>
                <div>
                  <xsl:value-of select="company" />
                </div>
              </div>
            </xsl:for-each>
         </div>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

      <!-- <div id="containers">
        <div class="todo-Container container">
          <h3>TODO</h3>
          <div class="todo-item-container">
            <div class="single-item">
              <div class="header">Some issue 1</div>
              <div>Company3</div>
            </div>
            <div class="single-item">
              <div class="header">Some incident 4</div>
              <div>Company3</div>
            </div>
            <div class="add-new-tasks-here"></div>
            <div class="add-new-task">
              <input
                type="text"
                id="add-task-input"
                name="add-task-input"
                placeholder="Task; company"
              />
              <button id="add-button">Add</button>
            </div>
          </div>
        </div>

        <div class="inProgress-Container container">
          <h3>In Progress</h3>
          <div class="item-container">
            <div class="single-item">
              <div class="header">Some incident 2</div>
              <div>Company4</div>
            </div>
            <div class="single-item">
              <div class="header">Some issue 5</div>
              <div>Company2</div>
            </div>
          </div>
        </div>
        <div class="verification-Container container">
          <h3>Verification</h3>
          <div class="item-container">
            <div class="single-item">
              <div class="header">Some issue 2</div>
              <div>Company4</div>
            </div>
            <div class="single-item">
              <div class="header">Some issue 6</div>
              <div>Company4</div>
            </div>
          </div>
        </div>
        <div class="done-Container container">
          <h3>Done</h3>
          <div class="item-container">
            <div class="single-item">
              <div class="header">Some incident 3</div>
              <div>Company1</div>
            </div>
            <div class="single-item">
              <div class="header">Some incident 10</div>
              <div>Company3</div>
            </div>
          </div>
        </div>
   
    </div>
  </body>
</html> -->


<!-- this is the old one just in case ----------------------------------------------- -->

<!-- <?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html lang="en">
      <head>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"></link>
          <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
          <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
          <script src="client.js"></script>
          <link rel="stylesheet" href="style.css"></link>
    </head>
      <body>
        <h2>
          Issues and incidents: <xsl:value-of select="count(issues/issue)" />
        </h2>
    <div>
      <xsl:for-each select="issues/issue">
        <div>
          <div class="header">
              <xsl:value-of select="title" />
          </div>
          <div>
            <xsl:value-of select="company" />
          </div>
        </div>
      </xsl:for-each>
    </div>
      </body>
    </html>
  </xsl:template>

    </xsl:stylesheet> -->