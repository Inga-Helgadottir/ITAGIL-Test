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

    </xsl:stylesheet>