<?php

$sort = defined('SCANDIR_SORT_DESCENDING') ? SCANDIR_SORT_DESCENDING : 2;
$dir = scandir('../_upload', $sort );
if ($dir) {
	echo json_encode($dir);
} else {
	echo json_encode(array());
}

?>