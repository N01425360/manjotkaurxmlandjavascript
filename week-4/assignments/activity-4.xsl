<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<xsl:template match="/"> 
<html> 
<body> 
 <h1>producttable1</h1>
 <table border="1"> 
    <tr> 
     <th>Productname</th> 
     <th>Manufacturerid</th> 
     <th>Description</th> 
     <th>USDprice</th> 
     </tr>
         <xsl:for-each select="products/product"> 
             <xsl:if test="@shippable='true'">
                <tr> 
                    <td><xsl:value-of select="productName"/></td> 
                    <td><xsl:value-of select="manufacturer/@id"/></td> 
                    <td><xsl:value-of select="description"/></td> 
                    <td><xsl:value-of select="prices/price[1]"/></td> 
                 </tr> 
                  </xsl:if>
                 </xsl:for-each> 
 </table> 
 <h1>producttable2</h1>
 <table border="1">
    <tr>
        <th>Productname</th>
        <th>Description</th>
        <th>USDprice</th>
        <th>Europrice</th>
    </tr>
<xsl:for-each select="products/product">
<xsl:if test="manufacturer/@id='acme'">
     <tr>
        <td> <xsl:value-of select="productName"/></td>
        <td> <xsl:value-of select="description"/></td>
        <td> <xsl:value-of select="prices/price[1]"/></td>
        <td> <xsl:value-of select="prices/price[3]"/></td>
    </tr>
</xsl:if>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>