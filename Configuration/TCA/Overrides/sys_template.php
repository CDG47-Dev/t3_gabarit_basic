<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 't3_gabarit_basic';

    /**
     * Default TypoScript for T3 Gabarit Basic
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'T3 Gabarit Basic'
    );
});
