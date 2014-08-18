<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package explosions
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php //the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

<?php if (is_front_page()) : ?>

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'explosions' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

<?php elseif (is_page()) : ?>

	<div class="entry-content-pages">
	<p>this is on content-page.php</p>
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'explosions' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

<?php endif; ?>

	<footer class="entry-footer">
		
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
