<?php 
function post_has_archive( $args, $post_type ) {
	if ( 'post' == $post_type ) {
		$args['rewrite'] = true;// slugを書き換え可能にする。
		$args['has_archive'] = 'blog'; // slug名変更。
	}
	return $args;
}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );