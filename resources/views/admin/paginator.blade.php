@if ($paginator->hasPages())
    <ul class="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                <span class="page-link" aria-hidden="true">‹</span>
            </li>
        @else
            <li class="page-item">
                <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="« Previous">‹</a>
            </li>
        @endif

        @if($paginator->currentPage() > 3)
            <li class="page-item">
                <a class="page-link" href="{{ $paginator->url(1) }}">1</a>
            </li>
        @endif
        @if($paginator->currentPage() > 4)
            <li class="page-item disabled" aria-disabled="true">
                <span class="page-link" aria-hidden="true">...</span>
            </li>
        @endif
        @foreach(range(1, $paginator->lastPage()) as $i)
            @if($i >= $paginator->currentPage() - 2 && $i <= $paginator->currentPage() + 2)
                @if ($i == $paginator->currentPage())
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">{{ $i }}</span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $paginator->url($i) }}">{{ $i }}</a>
                    </li>
                @endif
            @endif
        @endforeach
        @if($paginator->currentPage() < $paginator->lastPage() - 3)
            <li class="page-item disabled" aria-disabled="true">
                <span class="page-link" aria-hidden="true">...</span>
            </li>
        @endif
        @if($paginator->currentPage() < $paginator->lastPage() - 2)
            <li class="page-item">
                <a class="page-link" href="{{ $paginator->url($paginator->lastPage()) }}">{{ $paginator->lastPage() }}</a>
            </li>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="page-item">
                <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="Next »">›</a>
            </li>
        @else
            <li class="page-item disabled" aria-disabled="true" aria-label="Next »">
                <span class="page-link" aria-hidden="true">›</span>
            </li>
        @endif
    </ul>
@endif
