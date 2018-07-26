<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 't3_gabarit_basic';

    /**
     * Default PageTS for t3_gabarit_basic
     */
   
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/PageTS/All.txt',
        'T3 Gabarit Basic'
    );
	
	if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('cs_seo')) {
        $GLOBALS['TCA']['pages']['columns']['tx_csseo_og_description']['config']['default'] = '';
        $GLOBALS['TCA']['pages']['columns']['tx_csseo_tw_description']['config']['default'] = '';
    }
    	
	
});