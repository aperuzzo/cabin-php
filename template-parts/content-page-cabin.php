<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cabin_php
 */

?>
<article class="cabin-gallery">
	<?php 
		$images = get_field('cabin_gallery');

		if ($images): ?>
			<ul class="gallery-img">
				<?php foreach($images as $image): ?>
					<li class="img-<?php echo $image['id']; ?>">
						<img src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>">
					</li>
				<?php endforeach; ?>
			</ul>
			<ul class="gallery-thumbs">
				<?php foreach($images as $image): ?>
					<li class="img-<?php echo $image['id']; ?>">
						<img src="<?php echo $image['sizes']['thumbnail'] ?>" alt="<?php echo $image['alt']; ?>">
					</li>
				<?php endforeach; ?>
			</ul>

			
		<?php endif; ?>
	
</article>


<article id="post-<?php the_ID(); ?>" class="cabin-info">
	<header class="entry-header">
		<?php the_title( '<h1 class="cabin-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			the_content();

			// wp_link_pages( array(
			// 	'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cabin_php' ),
			// 	'after'  => '</div>',
			// ) );
		?>
		<button><a href="#">check availability</a></button>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
