<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
    <xsl:template match="/"> 
        <html> 
            
            <body> 
                <h1>Catalog</h1>
                <ol> 
                    <xsl:for-each select="catalog/product">
                        <li><article><h3><xsl:value-of select="@product_id"/></h3></article></li>
                        <li><article><p><xsl:value-of select="@description"/></p></article></li>
                        <table border="5">
                            <tr >
                                <th>itemnumber</th>
                                <th>price</th>
                                <th>gender</th>
                                <th>small</th>
                                <th>medium</th>
                                <th>large</th>
                                <th>extralarge</th>
                            </tr>
                            <xsl:for-each select="catalog_item">
                            <tr>
                                <td><xsl:value-of select="item_number"/></td>
                                <td><xsl:value-of select="price"/></td>
                                <td><xsl:value-of select="@gender"/></td>
                                <td>
                                    <table border="5">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                            
                                        </tr>
                                        <xsl:for-each select="size[@description='Small']">
                                            <xsl:for-each select="color_swatch">
                                            <tr>    
                                                    <td><xsl:value-of select="."/></td>                              
                                                    <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                            </xsl:for-each>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table border="5">
                                        <tr >
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Medium']">
                                            <xsl:for-each select="color_swatch">
                                            <tr>    
                                                    <td><xsl:value-of select="."/></td>                              
                                                    <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                            </xsl:for-each>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table border="5">
                                        <tr>
                                            <th>color</th>
                                            <th>image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Large']">
                                            <xsl:for-each select="color_swatch">
                                            <tr>    
                                                    <td><xsl:value-of select="."/></td>                              
                                                    <td><xsl:value-of select="@image"/></td>
                                            </tr>
                                            </xsl:for-each>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table border="5">
                                        <tr>
                                            <th>Color</th>
                                            <th>Image</th>
                                        </tr>
                                        <xsl:for-each select="size[@description='Extra Large']">
                                            <xsl:for-each select="color_swatch">
                                            <tr>    
                                                    <td><xsl:value-of select="."/></td>                              
                                                    <td><xsl:value-of select="@image"/></td> 
                                            </tr>
                                            </xsl:for-each>
                                        </xsl:for-each>
                                    </table>
                                </td>
                            </tr>
                            </xsl:for-each>
                        </table>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>